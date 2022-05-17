'use strict'

const e = React.createElement

class LikeButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            liked: false
        };
    }
    render() {
        if (this.state.liked) {
            //return 'You liked comment number ' + this.props.commentID
            return (
                e( 
                    'div', {},
                    e( 'p', {}, 'You liked quote ' + this.props.commentID ),
                    e(
                        'button', {
                            onClick: () => this.setState({
                                liked: false
                            })
                        },
                        'Unlike'
                    )
                )
            )
        }
        return (
            e(
                'button', {
                    onClick: () => this.setState({
                        liked: true
                    })
                },
                'Like'
            )           
        )
    }
}

document.querySelectorAll('.like_button_container')
    .forEach(domContainer => {
        const commentID = parseInt(domContainer.dataset.commentid, 10)
        const root = ReactDOM.createRoot(domContainer)
        root.render( e(LikeButton, { commentID: commentID } ) )
    })