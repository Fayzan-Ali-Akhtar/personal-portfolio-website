# Automatically verifies the email identity with SES.
# This will trigger AWS SES to send a verification email to the address.
resource "aws_ses_email_identity" "fayzan_email" {
  email = var.recipient_email
}
