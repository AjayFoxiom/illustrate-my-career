<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the portfolio on the single index route with section anchors; its sections share one cohesive reading flow.
- Keep portfolio content static and contact mailto-only; no server or persistence is needed.
- Store uploaded résumé downloads as Lovable Assets pointers and generated avatar art as imported project imagery; each follows its asset lifecycle.
- Define all visual styling and theme values in the global design system; the page selects semantic classes and theme state only.
- Prebundle React and portfolio UI dependencies together in Vite; late dependency discovery can otherwise mix React dispatcher generations in an open preview.
