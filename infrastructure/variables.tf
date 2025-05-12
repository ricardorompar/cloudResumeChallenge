variable "aws_region" {
  description = "AWS Region for the CRC infrastructure."
  type        = string
  default     = "us-east-1"
}

variable "bucket_prefix" {
  description = "Prefix to put in front of the bucket name."
  type        = string
  default     = "ricardorompar"
}

variable "cf_token" {
  description = "Cloudflare provider authentication token."
  type        = string
}

variable "domain_name" {
  description = "Domain name for the website."
  type        = string
  default     = "ricardorompar.com"
}