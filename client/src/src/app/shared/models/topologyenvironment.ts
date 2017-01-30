export class TopologyEnvironment {
    Name: string;
    CoreServiceEndpoint: EndPoint;
    TopologyManagerEndpoint: EndPoint;
}

export class EndPoint {
    Url: string;
    Domain: string;
    UserName: string;
    Password: string;
}