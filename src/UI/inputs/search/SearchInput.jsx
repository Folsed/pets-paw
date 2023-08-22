import InteractionButton from '@/UI/buttons/interactions/InteractionButton'
import styles from './search-input.module.css'
import SearchIcon from '@/assets/svgs/icons/search.svg'

const SearchInput = () => {
    return (
        <div className={styles.inputBox}>
            <label className={styles.field}>
                <input
                    type='text'
                    required
                    className={styles.input}
                    // onChange={handleInputChange}
                    // value={credentials.email}
                    placeholder='Search for breeds by name'
                />
                <InteractionButton
                    icon={<SearchIcon/>}
                    size={20}
                    padding={10}
                />
            </label>
        </div>
    )
}

export default SearchInput
