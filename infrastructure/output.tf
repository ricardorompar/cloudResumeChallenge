output "website_url" {
  description = "HTTP URL of the website"
  value       = "http://${aws_s3_bucket_website_configuration.crc_website.website_endpoint}"
}