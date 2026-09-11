        import { useEffect } from "react"
        import restCountries from '../api/restcountries';
 import {CountryCard} from './components/CountryCard';
 import {} from '../hooks/useFavorites';
 import styles from './Home.module.css';
 

        const REGIONS = [
            {id : 'all', name: 'Todos', endpoint: '/all'},
            {id : 'africa', name: 'África', endpoint: '/africa'},
            {id : 'americas', name: 'América', endpoint: '/americas'},
            {id : 'asia', name: 'Ásia', endpoint: '/asia'},
            {id : 'europe', name: 'Europa', endpoint: '/europe'},
            {id : 'oceania', name: 'Oceania', endpoint: '/oceania'}
        ];

        export function Home() {
const [countries, setCountries] = useState([]);
const [loading, setLoading] = useState(true);
const [activeTab, setActiveTab] = useState([Regions[0]]);
const { isFavorite, toggleFavorite } = useFavorites();
        
        useStates

        useEffect

        return(
            <div>
            
            
            .map
            </div>
        )
    }