#------------------------------------------------------------------------------
# Base64-encoded certificates
#------------------------------------------------------------------------------
output "tls_cert_base64" {
  value       = try(base64encode(acme_certificate.cert.certificate_pem), null)
  description = "Base64-encoded string of TLS certificate."
}

output "tls_fullchain_base64" {
  value       = try(base64encode(join("", [acme_certificate.cert.certificate_pem, acme_certificate.cert.issuer_pem])), null)
  description = "Base64-encoded string of TLS certificate full chain."
}

output "tls_privkey_base64" {
  value       = try(base64encode(acme_certificate.cert.private_key_pem), null)
  description = "Base64-encoded string of TLS private key."
  sensitive   = true
}

output "tls_ca_bundle_base64" {
  value       = try(base64encode(acme_certificate.cert.issuer_pem), null)
  description = "Base64-encoded string of TLS CA bundle."
}