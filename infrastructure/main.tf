#######################################
#               BUCKET                #
#######################################

resource "aws_s3_bucket" "crc_bucket" {
  bucket_prefix = var.bucket_prefix
  force_destroy = true
}

resource "aws_s3_bucket_website_configuration" "crc_website" {
  bucket = aws_s3_bucket.crc_bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}

resource "aws_s3_bucket_public_access_block" "public_access" {
  bucket                  = aws_s3_bucket.crc_bucket.id
  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

#i need to access the bucket from the internet so:
resource "aws_s3_bucket_policy" "hosting_bucket_policy" {
  bucket = aws_s3_bucket.crc_bucket.id

  policy = jsonencode({
    "Version" : "2012-10-17"
    "Statement" : [
      {
        "Effect" : "Allow"
        "Principal" : "*"
        "Action" : "s3:GetObject"
        "Resource" : "${aws_s3_bucket.crc_bucket.arn}/*"
      }
    ]
  })
}

# module "template_files" {
#   # This is a compute-only Terraform module (that is, a module that doesn't make any remote API calls) 
#   # which gathers all of the files under a particular base directory and renders those which have a particular 
#   # suffix as Terraform template files.
#   source   = "hashicorp/dir/template"
#   base_dir = "${path.module}/../frontend"
# }

# resource "aws_s3_object" "files" {
#   bucket       = aws_s3_bucket.crc_bucket.id
#   for_each     = module.template_files.files
#   key          = each.key
#   content_type = each.value.content_type
#   source       = each.value.source_path
#   content      = each.value.content
#   etag         = each.value.digests.md5
# }


resource "aws_s3_object" "website_files" {
  for_each = fileset("${path.module}/../frontend", "**/*.*")

  bucket = aws_s3_bucket.crc_bucket.id
  key    = each.value
  source = "${path.module}/../frontend/${each.value}"
  etag   = filemd5("${path.module}/../frontend/${each.value}")
  content_type = lookup(
    {
      html = "text/html"
      css  = "text/css"
      js   = "application/javascript"
      png  = "image/png"
      jpg  = "image/jpeg"
      svg  = "image/svg+xml"
    },
    split(".", each.value)[length(split(".", each.value)) - 1],
    "application/octet-stream"
  )
}