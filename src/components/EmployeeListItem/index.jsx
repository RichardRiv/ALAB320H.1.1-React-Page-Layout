import './styles.css';
import pfp from '../../assets/react.svg';

const EmployeeListItem = ({ name, role }) => {
	return (
		<>
			<div className="empItem-info">
				<img src={pfp} alt="pfp" />
				<div className="empItem-name-role">
					<h4>{name}</h4>
					<h5>{role}</h5>
				</div>
			</div>
		</>
	);
};

export default EmployeeListItem;
