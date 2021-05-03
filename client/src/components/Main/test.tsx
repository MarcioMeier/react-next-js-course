import { render, screen } from '@testing-library/react'

import Main from './index'

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /React Avançado/ })
    ).toBeInTheDocument()
  })

  it('should render correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toMatchInlineSnapshot(`
      <main>
        <h1>
          React Avançado
        </h1>
      </main>
    `)
  })
})
