import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination"
import { memo, useContext } from "react"
import parse from 'html-react-parser';
import CustomerContext from "@/context/CustomerContext";

interface linkProps {
  label: string,
  active: boolean
  url: string | null
}

interface paginationProps {
  links?: linkProps[]
}

const _Pagination = memo(function (props: paginationProps) {
  const cs = useContext(CustomerContext)

  function getPageNumber(url: string): number {

    const _url = new URL(url);
    let pageNumber = Number(_url.searchParams.get('page'))

    return pageNumber
  }

  function changePage(link: linkProps) {
    if(link.active || !link?.url) return

    const pageNumber = getPageNumber(link.url)

    cs.renderList({page: pageNumber})
  }

  return (
    <Pagination className="!justify-start">
      <PaginationContent className="w-fit">
        {props.links?.map((link, linkIndex) => {
          return (
            <PaginationItem key={linkIndex} className="w-fit">
              <PaginationLink
                isActive={link.active}
                onClick={() => changePage(link)}
                className={"w-fit px-4 " + ((link.active || link?.url) ? 'cursor-pointer ' : 'cursor-default bg-gray-200')}>
                {parse(link.label)}
              </PaginationLink>
            </PaginationItem>
          )
        })}
      </PaginationContent>
    </Pagination>
  )
})

export default _Pagination