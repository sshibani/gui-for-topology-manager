export class TopologyEnvironment {
    Name: string;
    CoreServiceEndpoint: EndPoint = new EndPoint();
    TopologyManagerEndpoint: EndPoint = new EndPoint();
}

export class EndPoint {
    Url: string;
    Domain: string;
    UserName: string;
    Password: string;
}