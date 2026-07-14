import './styles.css';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import EmployeeList from '../../components/EmployeeList';

const Home = () => {
	return (
		<>
			<div className="container">
				<div className="outer-box">
					<Header />
					<SearchBar />
					<EmployeeList />
				</div>
			</div>
		</>
	);
};

export default Home;
