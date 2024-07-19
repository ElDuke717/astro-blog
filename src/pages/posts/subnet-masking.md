---
setup: |
  import Layout from '../../layouts/BlogPost.astro'

title: How Subnet Masking Works
publishDate: 04 December 2023
name: Nick Huemmer
twitter: "https://twitter.com/nickhuemmer"
value: 128
description: How does subnet masking work?
tags: networking, subnet masking, subnetting, IP addresses
---

![Subnet](/public/img/network_diagram.png)

# How Subnet Masking Works

This is a bit of a deviation from my usual software development posts, but I've been studying for the AWS SAA exam and wanted to write about some of the networking concepts I've been learning about. I'm hoping to understand these concepts while still keeping my main focus on software engineering. I find that when I write about something, I understand it better.

I've been learning about and setting up VPCs (virual private cloud) and subnets in AWS and I wanted to write about how subnet masking works to help me understand it better.

## What is a subnet?

Subnetting is the practice of dividing a network into two or more smaller networks. It increases routing efficiency, enhances the security of the network and reduces the size of the broadcast domain.

A subnet is a logical subdivision of an IP (internet protocol) network. It is a group of IP addresses that are all part of the same network. A subnet mask is used to divide an IP address into two parts: a network address and a host address.


A common example of a subnet is a home network. A home network is a group of devices that are all connected to the same router. The router is the gateway to the internet, it's essentially the "middleman" between your home network and the internet and is what other devices on the internet see when they connect to your network. It is responsible for routing traffic between your home network and the internet. The device that you're on right now is likely on a subnetwork and has an IP address that is assigned to it by the router. The router assigns IP addresses to each device on the network.
![Router](/public/img/router_lady.png)
Imagine in the trippy AI picture above, the lady is your router. She is the gateway to the internet and she connects directly to it through signals she receives. She is the middleman between your home network and the internet and connects to each device on your network. She is responsible for routing traffic between your home network and the internet. The device that you're on right now is likely on a subnetwork and has an IP address that is assigned to it by the router. The router assigns IP addresses to each device on the network.
-- Insert picture of home network --

The router assigns IP addresses to each device on the network. The router is the gateway to the internet. The router assigns IP addresses to each device on the network.

An IP network is a group of IP addresses that are all part of the same network. An IP address is a unique identifier for a device on a network. It is a 32-bit number that is divided into four 8-bit numbers separated by periods. Each 8-bit number is called an octet.

Here is an example of an octet derived from an IP (specifically IPv4) address:

```
192.1.168.1
```

can be converted to binary:

```
11000000.00000001.10101000.00000001
```

There are many tools out there that you can use to convert an IP address to binary. Here's one: https://www.browserling.com/tools/ip-to-bin

I also wrote a little JavaScript function to convert an IP address to binary:

```javascript
function decimalToBinary(number) {
  let temp = number;
  let bin = "";
  for (let i = 0; i < 8; i++) {
    if (temp >= 2 ** (7 - i)) {
      temp = temp - 2 ** (7 - i);
      bin += "1";
    } else {
      bin += "0";
    }
  }
  return bin;
}
```

And for fun, here's a function to convert a binary number to decimal:

```javascript
function binaryToDecimal(binary) {
  let number = 0;
  const bin = binary.split("");
  for (let i = 0; i < bin.length; i++) {
    if (bin[i] === "1") {
      number += 2 ** (7 - i);
    }
  }
  return number;
}

console.log(binaryToDecimal("11000000")); // 192
console.log(binaryToDecimal("00000100")); // 4
console.log(binaryToDecimal("00110111")); // 55
console.log(binaryToDecimal("11110100")); // 244
```

###### plug these into a repl.it or sandbox and try them out!

The binary version of an ip address is what computers on the network actually use and what they use to communicate with each other.

## What is a subnet mask?

A subnet maskis used in conjunction with an IP address to indicate the size of a network. It essentially masks or defines the boundary between the network part and the host part of an IP address. Like IP addresses, subnet masks can also be represented in binary form, where a series of 1s represent the network part of the address, and the series of 0s represent the host part. In dotted-decimal notation, a common subnet mask is 255.255.255.0, which in binary is 11111111.11111111.11111111.00000000.

## Subnet Masking and AWS VPCs

A VPC is a virtual private cloud. It is a virtual network dedicated to your AWS account and is logically isolated from other virtual networks in the AWS cloud. You can launch AWS resources into a VPC that you define, such as EC2 instances.

An EC2 instance is a virtual server in Amazon's Elastic Compute Cloud (EC2) for running applications on the AWS infrastructure. It's like a virtual machine that you can use to run applications in the cloud and is one of the most common AWS services. They are like little virtual computers that you can use to run applications in the cloud.

-- Insert picture of EC2 instance --

EC2 instances are often launched into a subnet. Each EC2 instance must be launched into a subnet. A subnet is a logical subdivision of an IP (internet protocol) network. It is a group of IP addresses that are all part of the same network. A subnet mask is used to divide an IP address into two parts: a network address and a host address. IP addresses are the unique identifiers for devices on a network, and a useful analogy would be home mailing addresses. Every device on a network has an IP address just like every home in your neighborhood has an IP address.
