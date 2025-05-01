#------------------------------------------------------------------------------
# TLS private key
#------------------------------------------------------------------------------
resource "tls_private_key" "cert" {
  algorithm = "RSA"
  rsa_bits  = 2048
}

#------------------------------------------------------------------------------
# ACME registration and certificate
#------------------------------------------------------------------------------
resource "acme_registration" "cert" {
  account_key_pem = tls_private_key.cert.private_key_pem
  email_address   = var.tls_cert_email_address
}

resource "acme_certificate" "cert" {
  account_key_pem = acme_registration.cert.account_key_pem
  common_name     = var.tls_cert_fqdn
  pre_check_delay = var.tls_cert_pre_check_delay

  dns_challenge {
    provider = "cloudflare"

    config = {
      CF_DNS_API_TOKEN = var.cf_api_token
    }
  }
}

#------------------------------------------------------------------------------
# Local files
#------------------------------------------------------------------------------
locals {
  folder_path     = "${path.cwd}/certs"
  filename_prefix = replace(var.tls_cert_fqdn, ".", "_")

  cert_filepath      = "${local.folder_path}/${local.filename_prefix}_cert.pem"
  privkey_filepath   = "${local.folder_path}/${local.filename_prefix}_privkey.pem"
  ca_bundle_filepath = "${local.folder_path}/${local.filename_prefix}_ca_bundle.pem"
  fullchain_filepath = "${local.folder_path}/${local.filename_prefix}_fullchain.pem"
}

resource "local_file" "tls_cert" {
  content  = acme_certificate.cert.certificate_pem
  filename = local.cert_filepath
}

resource "local_file" "tls_privkey" {
  content  = nonsensitive(acme_certificate.cert.private_key_pem)
  filename = local.privkey_filepath
}

resource "local_file" "tls_ca_bundle" {
  content  = acme_certificate.cert.issuer_pem
  filename = local.ca_bundle_filepath
}

resource "local_file" "tls_fullchain" {
  content  = "${acme_certificate.cert.certificate_pem}${acme_certificate.cert.issuer_pem}"
  filename = local.fullchain_filepath
}
