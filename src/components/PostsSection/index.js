import './index.css';

export default function(props) {
    return (
        <section class={`${props.className} posts`}>
            <h2 class="title">{props.title}</h2>
            {props.children}
        </section>
    )
}