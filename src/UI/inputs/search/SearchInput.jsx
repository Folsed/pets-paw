import InteractionButton from '@/UI/buttons/interactions/InteractionButton'
import styles from './search-input.module.css'
import SearchIcon from '@/assets/svgs/icons/search.svg'

const SearchInput = ({ onSubmit, value, setValue }) => {
    const handleInputChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <form className={styles.inputBox} onSubmit={onSubmit} noValidate>
            <label className={styles.field}>
                <input
                    type='text'
                    required
                    className={styles.input}
                    onChange={handleInputChange}
                    value={value}
                    placeholder='Search for breeds by name'
                />
                <InteractionButton
                    icon={<SearchIcon />}
                    size={20}
                    padding={10}
                    type={'submit'}
                />
            </label>
        </form>
    )
}

export default SearchInput
