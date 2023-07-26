import  React from 'react';
import { useAppDispatch } from '../../hooks';
import { removeRecipes } from '../../store/reducers/recipesSlice';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button/Button';
import DeleteIcon from '@mui/icons-material/Delete';


interface CheckboxItemProps {
	id: number
}

export const CheckboxItem = (props:CheckboxItemProps ) => {

  	const [checked, setChecked] = React.useState(false);

  	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  	};

	const {id} = props;

  	const dispatch = useAppDispatch();
	
	const removeTask = () => dispatch(removeRecipes(id));

  	return (
		<>
			<Checkbox
				checked={checked}
				onChange={handleChange}
				inputProps={{ 'aria-label': 'controlled' }}	
			/>

			{(checked === true) 
			? <Button size='small' variant='contained' startIcon={<DeleteIcon />} onClick={removeTask}>Delete</Button> 
			:  null }
		</>
  	);
}


