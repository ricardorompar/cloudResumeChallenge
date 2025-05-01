terraform {
  required_providers {
    acme = {
      source  = "vancluever/acme"
      version = "~> 2.31"
    }
  }
}

provider "acme" {
  #server_url = "https://acme-staging-v02.api.letsencrypt.org/directory" # staging - for testing
  server_url = "https://acme-v02.api.letsencrypt.org/directory" # prod - for your real certs
}