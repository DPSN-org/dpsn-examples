# DPSN SDK Examples

This repository serves as the central collection of example code and tutorials for all DPSN SDKs. It provides practical implementations and best practices for developers looking to integrate with the DPSN platform.

## Overview

DPSN (Decentralized Publish-Subscribe Network) is a powerful platform for building decentralized applications. This repository contains example implementations that demonstrate how to effectively use DPSN's features across different programming languages and frameworks.

## Available SDK Examples

### Node.js SDK
Located in `dpsn-nodejs-examples/`, this directory contains TypeScript/JavaScript examples demonstrating:
- Publishing messages to topics
- Subscribing to topics
- Working with DPSN's Node.js SDK features
- Best practices for Node.js integration
- Error handling and retry mechanisms
- Authentication and security practices

### Coming Soon
We plan to add examples for additional SDKs:
- Python SDK
- Go SDK
- Java SDK
- More...

## Getting Started

1. Choose the SDK you want to work with
2. Navigate to the corresponding examples directory
3. Follow the setup instructions in the SDK-specific README
4. Run the examples to see DPSN in action

### Quick Start with Node.js

```bash
# Clone the repository
git clone https://github.com/your-org/dpsn-examples.git

# Navigate to Node.js examples
cd dpsn-examples/dpsn-nodejs-examples

# Install dependencies
npm install


# Run an example
npm run publish
```

## Prerequisites

- A DPSN account
- Access token for authentication
- SDK-specific requirements:
  - Node.js SDK: Node.js 16+ and npm/yarn
  - Python SDK (coming soon): Python 3.8+
  - Go SDK (coming soon): Go 1.18+

## Project Structure

```
dpsn-examples/
├── dpsn-nodejs-examples/     # Node.js SDK examples

```

## Contributing

We welcome contributions to expand our examples collection! If you'd like to:
- Add new examples
- Improve existing examples
- Add support for a new SDK
- Fix bugs or improve documentation

Please follow our contribution guidelines and submit a pull request.

### Development Workflow

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## Support

For questions or issues:
- Open an issue in this repository
- Check our [documentation](https://docs.dpsn.org)


## License

This repository is licensed under the Apache License - see the LICENSE file for details.
