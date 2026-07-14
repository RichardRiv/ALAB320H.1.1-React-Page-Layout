import './styles.css';

import { employees } from '../../data/employees';
import EmployeeListItem from '../EmployeeListItem';

const EmployeeList = () => {
	return (
		<>
			<div className="emp-list">
				{employees.map((emp) => (
					<EmployeeListItem key={emp.id} name={emp.name} role={emp.role} />
				))}
			</div>
		</>
	);
};

export default EmployeeList;
