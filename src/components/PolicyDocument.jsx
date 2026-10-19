import { createElement } from 'react';
import { muazzinMeta, muazzinPolicy } from '../data/muazzinPolicy';

// Content comes from the static, trusted policy data file (never user input),
// so inline HTML in strings is rendered as-is.
const Html = ({ as = 'span', html, ...rest }) =>
  createElement(as, { ...rest, dangerouslySetInnerHTML: { __html: html } });

function Block({ block }) {
  if (block.h3) return <h4 className="policy-h3">{block.h3}</h4>;
  if (block.p) return <Html as="p" className="policy-p" html={block.p} />;
  if (block.ul) {
    return (
      <ul className="policy-list">
        {block.ul.map((item) => <Html as="li" key={item} html={item} />)}
      </ul>
    );
  }
  if (block.table) {
    return (
      <div className="policy-table-wrap" tabIndex={0} role="region" aria-label="Third-party services table">
        <table className="policy-table">
          <thead>
            <tr>{block.table.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
          </thead>
          <tbody>
            {block.table.rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell) => <Html as="td" key={cell} html={cell} />)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return null;
}

export default function PolicyDocument() {
  return (
    <div className="policy-doc">
      <p className="policy-effective">Effective date: {muazzinMeta.effectiveDate}</p>

      <nav className="policy-toc" aria-label="Privacy policy contents">
        <p className="policy-toc__title">On this page</p>
        <ol>
          {muazzinPolicy.map((sec) => (
            <li key={sec.id}>
              <a href={`#policy-${sec.id}`} onClick={(e) => {
                e.preventDefault();
                document.getElementById(`policy-${sec.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}>
                {sec.title.replace(/^\d+\.\s*/, '')}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {muazzinPolicy.map((sec) => (
        <section key={sec.id} id={`policy-${sec.id}`} className="policy-section">
          <h3 className="policy-h2">{sec.title}</h3>
          {sec.blocks.map((block, i) => <Block key={i} block={block} />)}
        </section>
      ))}
    </div>
  );
}
