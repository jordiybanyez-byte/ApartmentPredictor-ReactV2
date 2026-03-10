# AWS S3

## 1. Create the S3 bucket

1. Sign in to the AWS Management Console and go to the **S3** service.
2. Click **Create bucket**.
3. Set **Bucket name** to `albertprofedocs`.
4. Choose your desired **AWS Region**: <mark>Frankfurt</mark>
5. (<mark>Important</mark>) In **Object Ownership / Block Public Access**, if you want this policy to actually allow public access, uncheck **Block all public access** and acknowledge the warning.
6. Leave other options as default (unless you need versioning, encryption, etc.).
7. Click **Create bucket**.

## 2. Open the bucket policy editor

1. In the S3 console, click the **albertprofedocs** bucket name.
2. Go to the **Permissions** tab.
3. Scroll to **Bucket policy** and click **Edit** (or **Add bucket policy**).

## 3. Paste your bucket policy

1. In the policy editor, paste this JSON (adjust only if your bucket name or actions change):

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AddPerm",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:PutObject",
                "s3:PutObjectAcl",
                "s3:GetObject",
                "s3:ListBucket"
            ],
            "Resource": [
                "arn:aws:s3:::albertprofedocs",
                "arn:aws:s3:::albertprofedocs/*"
            ]
        }
    ]
}
```

2. Resolve any security warnings the console shows (they are expected because this policy allows public access).
3. Click **Save changes**.

## 4. Quick verification

- Go to the **Objects** tab, upload a test file, and then open its **Object URL** in an incognito browser window to confirm `s3:GetObject` works publicly.
- Use the **AWS CLI** (optional) to `aws s3 ls s3://albertprofedocs` from any profile to verify `s3:ListBucket` access.

## References:

Here are your links converted to standard Markdown link syntax, one per line:

- [Step 1: Create an Amazon S3 Bucket – AWS Quick Start Guide](https://docs.aws.amazon.com/quickstarts/latest/s3backup/step-1-create-bucket.html) [docs.aws.amazon](https://docs.aws.amazon.com/es_es/quickstarts/latest/s3backup/step-1-create-bucket.html)
- [Adding a bucket policy by using the Amazon S3 console](https://docs.aws.amazon.com/AmazonS3/latest/userguide/add-bucket-policy.html) [docs.aws.amazon](https://docs.aws.amazon.com/AmazonS3/latest/userguide/add-bucket-policy.html)
- [Creating a general purpose bucket – Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html) [cloudian](https://cloudian.com/blog/s3-buckets-accessing-managing-and-securing-your-buckets/)
- [S3 Bucket Policies: A Practical Guide – Cloudian](https://cloudian.com/blog/s3-bucket-policies-a-practical-guide/) [cloudian](https://cloudian.com/hyperstore-guide/blog/s3-bucket-policies-a-practical-guide/)
- [Amazon S3 – Creating a S3 Bucket – GeeksforGeeks](https://www.geeksforgeeks.org/cloud-computing/amazon-s3-creating-a-s3-bucket/) [geeksforgeeks](https://www.geeksforgeeks.org/devops/adding-a-bucket-policy-by-using-the-amazon-s3-console/)
- [How can I grant public read access to some objects in my Amazon S3 bucket? – YouTube](https://www.youtube.com/watch?v=QRJb3SKt2tI) [docs.aws.amazon](https://docs.aws.amazon.com/es_es/quickstarts/latest/s3backup/step-1-create-bucket.html)
- [How can I make a S3 bucket public (the amazon example policy doesn't work) – StackOverflow](https://stackoverflow.com/questions/9264062/how-can-i-make-a-s3-bucket-public-the-amazon-example-policy-doesnt-work) [docs.aws.amazon](https://docs.aws.amazon.com/es_es/quickstarts/latest/s3backup/step-1-create-bucket.html)
- [Adding a Bucket Policy by using the Amazon S3 Console – GeeksforGeeks](https://www.geeksforgeeks.org/devops/adding-a-bucket-policy-by-using-the-amazon-s3-console/) [geeksforgeeks](https://www.geeksforgeeks.org/devops/adding-a-bucket-policy-by-using-the-amazon-s3-console/)
- [Define access and permissions using bucket policies – Akamai Cloud Computing Docs](https://techdocs.akamai.com/cloud-computing/docs/define-access-and-permissions-using-bucket-policies) [youtube](https://www.youtube.com/watch?v=QRJb3SKt2tI)
- [Creating and Sharing an AWS S3 Bucket – InterWorks](https://interworks.com/blog/2020/04/22/creating-and-sharing-an-aws-s3-bucket/) [interworks](https://interworks.com/blog/2020/04/22/creating-and-sharing-an-aws-s3-bucket/)
