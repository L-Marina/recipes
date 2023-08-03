import  React from 'react';
import { useAppDispatch } from '../../hooks';
import { removeRecipes } from '../../store/reducers/recipesSlice';
import { Checkbox, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface CheckboxItemProps {
	id: number,
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
			? <Button size='small' variant='contained' endIcon={<DeleteIcon />} onClick={removeTask}>Delete</Button> 
			:  null 
			}
		</>
  	);
}


