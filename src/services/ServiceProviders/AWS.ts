import  { SESClient as AWSSESClient }  from  "@aws-sdk/client-ses";
import { AWS_REGION, AWS_ACCESS_KEY, AWS_SECRET_KEY } from "../../../constants";

// Create SES service object.
const SESClient = new AWSSESClient({
  region: AWS_REGION,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY!,
    secretAccessKey: AWS_SECRET_KEY!
  }
});

export { SESClient };
