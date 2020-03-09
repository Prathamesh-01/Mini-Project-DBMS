import {useRouter} from 'next/router'
import { getMoviesbyId } from '../../actions'


const Movie = (props) => {
    const router = useRouter()
    const { id } = router.query
    const {movie} = props
    // console.log(movie["2"])
    return (
        <div className = "container">
        <div className="jumbotron">
            <h1 className="display-4">{movie.rating}</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4"/>
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </div>
        <p>
            Hey There how is it going!!!!
        </p>
        </div>
    )
}

Movie.getIntialProps = async () => {
    const movie = await getMoviesbyId("2")
    // console.log("Helo")
    return {movie}
}

export default Movie