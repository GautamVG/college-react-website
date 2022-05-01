import './index.css';

export default function(props) {
    return (
        // <a href="../article/index.html" class="post">
        <a href="" class="post">
            <div class="thumbnail img-container">
                <img src={props.img} />
            </div>
            <div class="details">
                <p class="title">{props.title}</p>
                <div class="author">
                    <div class="pic img-container">
                        <img src={props.author.img} />
                    </div>
                    <p class="name">{props.author.name}</p>
                    <p class="bio">{props.author.bio}</p>
                </div>
            </div>
        </a>
    )
}