variable "tls_cert_fqdn" {
  type        = string
  description = "Fully-qualified domain name (FQDN) of TLS certificate. This will be set as the Common Name of the certificate."
}

variable "tls_cert_email_address" {
  type        = string
  description = "Email address used for TLS certificate registration and recovery contact."
}

variable "tls_cert_pre_check_delay" {
  type        = number
  description = "Number of seconds to wait before checking for DNS propagation during TLS certificate creation."
  default     = 20
}

# Cloudflare credentials (passed as env vars)
variable "cf_api_token" {
  type        = string
  description = "Cloudflare API token for DNS challenge. Permissions required -> DNS:Edit"
}