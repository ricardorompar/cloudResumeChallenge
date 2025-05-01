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