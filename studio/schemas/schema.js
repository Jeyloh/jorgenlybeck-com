// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './objects/blockContent'
import mainImage from './objects/mainImage'
import about from './documents/about'
import projects from './documents/projects'
import siteSettings from './documents/siteSettings'
import hobbies from './documents/hobbies'
import experiences from './documents/experiences'
import codeSnippets from './documents/codeSnippets'
import philosophy from './documents/philosophy'
import uses from './documents/uses'
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    about,
    projects,
    hobbies,
    experiences,
    philosophy,
    codeSnippets,
    uses,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    mainImage
  ])
})
