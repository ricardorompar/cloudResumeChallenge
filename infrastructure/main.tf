terraform{
    required_providers {
      aws = {
        source = "hashicorp/aws"
        version = "~>5.0"
      }
    }
}

provider "aws"{
    region = var.aws_region
}

resource "aws_s3_bucket" "crc_bucket" {
    bucket = var.bucket_name
}

resource "aws_s3_bucket_public_access_block" "public_access_block" {
    bucket = aws_s3_bucket.crc_bucket.id
    block_public_acls       = false
    block_public_policy     = false
    ignore_public_acls      = false
    restrict_public_buckets = false
}

resource "aws_s3_bucket_ownership_controls" "ownership_ctl" {
    bucket = aws_s3_bucket.crc_bucket.id
    rule {
        object_ownership = "BucketOwnerPreferred"
    }
}

resource "aws_s3_bucket_acl" "hosting_bucket_acl" {
    bucket = aws_s3_bucket.crc_bucket.id
    acl = "public-read"
    depends_on = [ 
        aws_s3_bucket_ownership_controls.ownership_ctl,
        aws_s3_bucket_public_access_block.public_access_block
    ]
}

#i need to access the bucket from the internet so:
resource "aws_s3_bucket_policy" "hosting_bucket_policy" {
  bucket = aws_s3_bucket.crc_bucket.id

  policy = jsonencode({
    "Version" : "2012-10-17"
    "Statement" : [
      {
        "Effect"    : "Allow"
        "Principal" : "*"
        "Action"    : "s3:GetObject"
        "Resource"  : "${aws_s3_bucket.crc_bucket.arn}/*"
      }
    ]
  })
}

module "template_files" {
    source = "hashicorp/dir/template"
    base_dir = "${path.module}/../frontend/build/"
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

resource "aws_s3_object" "files" {
    bucket = aws_s3_bucket.crc_bucket.id
    for_each = module.template_files.files
    key      = each.key
    # content_type = each.value.content_type
    source   = each.value.source_path
    content = each.value.content
    etag     = each.value.digests.md5
    acl    = "public-read"
}