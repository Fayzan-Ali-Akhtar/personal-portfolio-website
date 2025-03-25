import json
import os
import boto3

# Initialize the SES client
ses_client = boto3.client('ses')

def lambda_handler(event, context):
    try:
        # Extract the request body (assumed to be JSON)
        body = json.loads(event.get('body', '{}'))
        name = body.get('name', 'No Name Provided')
        sender_email = body.get('email', 'No Email Provided')
        message = body.get('message', 'No Message Provided')
        
        # Prepare the email subject and body
        subject = f"New Message from {name}"
        body_text = f"Name: {name}\nEmail: {sender_email}\nMessage: {message}"
        
        # Send the email using AWS SES
        response = ses_client.send_email(
            Source=os.environ['RECIPIENT_EMAIL'],  # Must be a verified email in SES
            Destination={
                'ToAddresses': [os.environ['RECIPIENT_EMAIL']]
            },
            Message={
                'Subject': {
                    'Data': subject
                },
                'Body': {
                    'Text': {
                        'Data': body_text
                    }
                }
            }
        )
        
        return {
            'statusCode': 200,
            'body': json.dumps({'message': 'Email sent successfully'})
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
        }
