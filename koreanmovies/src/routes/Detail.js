import React, { Component } from 'react'
import './Detail.css'
import Header from './Header';
import Footer from './Footer';

export class Detail extends Component {
    /* a. 먼저 예외상황 대비하여 무조건 url을 Home으로 이동시키기 */
    componentDidMount() {
        const { location, history } = this.props;
        if(location.state === undefined) {
            history.push('/');
        }
    }
    /* b. 예외상황 처리 후 화면에 나타내기 */
    render() {
        const {location} = this.props;
        if(location.state) {
            return (
            <div>
                <Header/>
                <div className='detail'>
                    <h2>
                        {location.state.title}
                    </h2>
                    <p>
                        <img src={location.state.poster} alt={location.state.title} />
                    </p>
                    <p>
                        평점 : <span>{location.state.rate}</span>
                    </p>
                    <p>
                        개봉일 : {location.state.release_date}
                    </p>
                    <ul className='genres'>장르 : 
                        {location.state.genres.map((id, name)=>{
                            return <li className='genre' key={id}>{name}</li>
                        })}
                    </ul>
                    <h3>줄거리</h3>
                    <p>
                        {location.state.overview}
                    </p>
                </div>
                <Footer/>
            </div>
            )
        }else {
            return null;
        }
    }
}
export default Detail