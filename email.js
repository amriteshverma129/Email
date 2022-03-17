class Email {
    constructor() {
        this.childrenNodes = "";
    }
    async getEmail() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        return data;
    }
    setEmail() {
        this.getEmail().then((data) => {
            this.setEmailHeadings(data)
            this.setFirstChildStyle(data)
            this.setClickOperation(data)
        })
    }
    setEmailHeadings(emails) {
        for (const email of emails) {
            document.querySelector('.email-heading').innerHTML += `<div>${email.title}</div>`
        }
    }
    setFirstChildStyle(emails) {
        const parentNode = document.querySelector('.email-heading');
        this.childrenNodes = Array.from(parentNode.children);
        this.setNodeStyle(this.childrenNodes[0], 'white', 'rgb(59, 130, 246)')
        document.querySelector('.email-content').innerHTML = `<div class="email-title">${emails[0].title}</div><div class="email-body"> ${emails[0].body}</div>`;
    }
    setNodeStyle(node, backgroundColor, color) {
        node.style.backgroundColor = backgroundColor
        node.style.color = color;
    }
    setClickOperation(emails) {
        let node = this.childrenNodes[0];
        this.childrenNodes.forEach((children, index) => {
            children.addEventListener('click', (e) => {
                if (node) {
                    this.setNodeStyle(node, 'rgb(228, 232, 235)', 'black')
                }
                node = e.target;
                this.setNodeStyle(node, 'white', 'rgb(59, 130, 246)')
                document.querySelector('.email-content').innerHTML = `<div class="email-title">${emails[index].title}</div><div class="email-body"> ${emails[index].body}</div>`
            })
        })
    }
}



const email = new Email();
email.setEmail()


