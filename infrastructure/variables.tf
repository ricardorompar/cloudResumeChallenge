variable "aws_region" {
  description = "AWS Region for the CRC infrastructure"
  type = string
  default = "eu-central-1"
}

variable "bucket_name" {
  description = "Name of the bucket"
  type = string
  default = "ricardorompar-crc-bucket"
}