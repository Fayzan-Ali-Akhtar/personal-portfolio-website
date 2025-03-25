output "api_endpoint" {
  description = "The URL endpoint to send the JSON payload"
  value       = "${aws_api_gateway_deployment.api_deployment.invoke_url}/send-email"
}
