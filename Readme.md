## Project Anatomy

### Components

#### Root
Renders root UI from `tree` state.

#### EditorRoot
Renders `Root` which within `EditorToggleGestureInterceptor`.  If
`showEditor` state is `true`, renders editor UI (`EditorToolbar` and
`EditorModalNavigator` as well).

#### EditorToolbar
Toolbar with a "Show Tree" button that resets `EditorModalNavigator` route stack
with the `Element` route with `tree` state as its `element` prop's value.

#### EditorToggleGestureInterceptor
Wrapper component that renders its children.  Has a pan responder used to
handle gestures that qualifies as "Toggle Editor" gestures by calling its
`toggleEditor` callback prop (which dispatches `TOGGLE_EDITOR`).

#### EditorModalNavigator
Modal that passes its `routeStack` (reduced from the `editorModalRouteStack` reducer) prop
to a `Navigator`. Modal is not visible while its `routeStack` prop is empty
or falsy.  It's navigation bar title is rendered with as a TouchableX with a
peek icon (PeekBehindEditorModalTitle)– when it's pressed down, it calls its
`onPressIn` callback (which dispatches `BEGIN_PEEK_BEHIND_EDITOR_MODAL`), and
when it's released it calls its `onPressOut` callback (which dispatches
`END_PEEK_BEHIND_EDITOR_MODAL`). EditorModalNavigator is rendered with opacity
`0` while its `peekBehind` prop is `true`.

#### Navigator
A simple, declarative navigator (controlled by its `routeStack` prop).

* * *


### Scenes
#### TreeElement
#### AddTreeElementChild
#### AddTreeElementProp
#### EditTreeElementProp

* * *


### Reducers
#### showEditor
#### editorModalRouteStack
#### peekBehindEditorModal
#### tree
