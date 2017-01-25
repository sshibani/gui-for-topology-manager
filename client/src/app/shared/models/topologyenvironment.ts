export class TopologyEnvironmnet {
    Name: string;
    CoreServiceEndpoint: EndPoint;
    TopologyManagerEndpoint: EndPoint;
}

export class EndPoint {
    Url: string;
    UserName: string;
    Password: string;
}