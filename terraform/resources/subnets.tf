resource "aws_subnet" "public_subnet" {
    availability_zone = "us-east-1a"
    cidr_block = "10.0.1.0/24"
    vpc_id = aws_vpc.nextbnb_vpc.id

    tags = {
        Name = "${var.app_name}-public-subnet"
    }
}

resource "aws_subnet" "private_subnet" {
    availability_zone = "us-east-1b"
    cidr_block = "10.0.2.0/24"
    vpc_id = aws_vpc.nextbnb_vpc.id

    tags = {
        Name = "${var.app_name}-private-subnet"
    }
}
