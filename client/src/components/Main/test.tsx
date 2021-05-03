import { render, screen } from '@testing-library/react'

import Main from './index'

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /React Avançado/ })
    ).toBeInTheDocument()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })

  it('should render correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toMatchInlineSnapshot(`
      <main
        class="styles__Wrapper-sc-1cs6c8-0 bBVefU"
      >
        <img
          alt="Imagem de um átomo e React Avançado escrito ao lado"
          class="styles__Logo-sc-1cs6c8-1 eivRWX"
          src="/img/logo.svg"
        />
        <h1
          class="styles__Title-sc-1cs6c8-2 bQPDep"
        >
          React Avançado
        </h1>
        <h2
          class="styles__Description-sc-1cs6c8-3 jApXu"
        >
          Typescript, ReactJS, NextJS e StyledComponents
        </h2>
        <img
          alt="Um desenvolvedor de frente para uma tela com código"
          class="styles__Illustration-sc-1cs6c8-4 cZHMdn"
          src="/img/hero-illustration.svg"
        />
      </main>
    `)
  })
})
