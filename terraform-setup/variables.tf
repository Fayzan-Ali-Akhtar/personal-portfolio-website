variable "region" {
  description = "AWS region for deployment"
  default     = "us-east-1"
}

variable "recipient_email" {
  description = "Email address to receive the forwarded email and be verified by SES"
  default     = "fayzan585@gmail.com"
}
