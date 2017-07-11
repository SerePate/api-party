import React, {Component} from 'react'
import './Github.css'

class Github extends Component{
    state = {
        username: " "
    }
    handleChange = (ev) => {
        this.setState({username: ev.target.value})
    }
    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.hisotry.push('/github/${this.state.username}')
        this.setState({username: " "}) 
    }

    render(){
        <div className='github'>
            <img className="githublogo" 
            src="http://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png"
            alt="github logo"
            />
        <form onSubmit={this.handleSubmit}>
            <div>
             <input 
             type="text" 
             value={this.state.username}
             onChange={this.handlechange}
             />
            </div>
            <div>
                <button>
        </form>

        </div>
           
        

    }
}

export default Github