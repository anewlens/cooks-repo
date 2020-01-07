import React from "react"
import { connect } from "react-redux"
import "./Home.scss"
import RecipeGrid from "../../components/RecipeGrid/RecipeGrid.component"
import Preview from "../../components/Preview/Preview.component"
import { togglePreview } from "../../redux/preview/preview.actions"

const Home = ({ preview, close }) => {
  return (
    <section className="Home">
      {preview && <Preview recipe={preview} close={close} />}
      <RecipeGrid />
    </section>
  )
}

const mapStateToProps = state => ({
  preview: state.preview
})

const mapDispatchToProps = dispatch => ({
  close: () => dispatch(togglePreview())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
