export class TodoItem {
        public id: number;
        public content: string;
        public ImgSrc: string | null;

        constructor (id: number, content: string, ImgSrc: string| null) {
          this.id = id
          this.content = content
          this.ImgSrc = ImgSrc
        }
}
