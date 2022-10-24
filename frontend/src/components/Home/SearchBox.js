import { connect } from "react-redux";
import agent from "../../agent";
import { SEARCH_CLICKED, SEARCH_TERM_CHANGED } from "../../constants/actionTypes";


const mapStateToProps = (state) => ({
    searchTerm: state.home?.searchTerm,
});

const mapDispatchToProps = (dispatch) => ({
    onSearchTermChange: (searchTerm) => dispatch({ type: SEARCH_TERM_CHANGED, searchTerm }),
    onSearchClicked: (pager, payload) => dispatch({ type: SEARCH_CLICKED, pager, payload })
})
function SearchBox(props) {
    const { searchTerm } = props;

    return (
        <div>
            <input
                id="search-box"
                type="text"
                placeholder="What is that you truly desire?"
                value={searchTerm}
                onChange={(e) => props.onSearchTermChange(e.target.value)} />
            <button onClick={() => {
                props.onSearchClicked(
                    (page) => agent.Items.byTitle(searchTerm, page),
                    agent.Items.byTitle(searchTerm))
            }}
            >
                Search
            </button>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);