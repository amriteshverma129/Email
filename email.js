class Email {
    constructor() {
        this.childrenNodes = "";
        this.emails = []
    }
    async getEmail() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        return data;
    }
    setEmail() {
        this.getEmail().then((data) => {
            this.emails = data
            email.setEmailHeadings()
            email.setFirstChildStyle()
            email.setClickOperation()
        })
    }
    setEmailHeadings() {
        for (const email of this.emails) {
            document.querySelector('.email-heading').innerHTML += `<div>${email.title}</div>`
        }
    }
    setFirstChildStyle() {
        const parentNode = document.querySelector('.email-heading');
        this.childrenNodes = Array.from(parentNode.children);
        this.setNodeStyle(this.childrenNodes[0], 'white', 'rgb(59, 130, 246)')
        document.querySelector('.email-content').innerHTML = `<div class="email-title">${this.emails[0].title}</div><div class="email-body"> ${this.emails[0].body}</div>`;
    }
    setNodeStyle(node, backgroundColor, color) {
        node.style.backgroundColor = backgroundColor
        node.style.color = color;
    }
    setClickOperation() {
        let node = this.childrenNodes[0];
        this.childrenNodes.forEach((children, index) => {
            children.addEventListener('click', (e) => {
                if (node) {
                    this.setNodeStyle(node, 'rgb(228, 232, 235)', 'black')
                }
                node = e.target;
                this.setNodeStyle(node, 'white', 'rgb(59, 130, 246)')
                document.querySelector('.email-content').innerHTML = `<div class="email-title">${this.emails[index].title}</div><div class="email-body"> ${this.emails[index].body}</div>`
            })
        })
    }
}



const email = new Email();
email.setEmail()


