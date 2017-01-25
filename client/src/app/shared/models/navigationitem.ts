export class NavigationItem {
    public title: string;
    public path: string;
    constructor(title: string, path: string) {
        this.path = path;
        this.title = title;
    }
}
