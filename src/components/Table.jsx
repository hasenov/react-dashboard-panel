import { createColumnHelper, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import { Fragment, useState } from "react";
import SimpleBar from "simplebar-react";
import Button from "./Button";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";

const defaultData = [
	{
		date: "12.05.2023",
		email: "accteam@mail.ru",
		amount: "$5454",
	},
	{
		date: "12.05.2023",
		email: "accteam@mail.ru",
		amount: "$5454",
	},
	{
		date: "12.05.2023",
		email: "accteam@mail.ru",
		amount: "$5454",
	},
	{
		date: "12.05.2023",
		email: "accteam@mail.ru",
		amount: "$5454",
	},
	{
		date: "12.05.2023",
		email: "accteam@mail.ru",
		amount: "$5454",
	},
	{
		date: "12.05.2023",
		email: "accteam@mail.ru",
		amount: "$5454",
	},
	{
		date: "12.05.2023",
		email: "accteam@mail.ru",
		amount: "$5454",
	},
	{
		date: "12.05.2023",
		email: "accteam@mail.ru",
		amount: "$5454",
	},
	{
		date: "12.05.2023",
		email: "accteam@mail.ru",
		amount: "$5454",
	},
	{
		date: "12.05.2023",
		email: "accteam@mail.ru",
		amount: "$5454",
	},
	{
		date: "12.05.2023",
		email: "accteam@mail.ru",
		amount: "$5454",
	},
	{
		date: "12.05.2023",
		email: "accteam@mail.ru",
		amount: "$5454",
	},
	{
		date: "12.05.2023",
		email: "accteam@mail.ru",
		amount: "$5454",
	},
	{
		date: "12.05.2023",
		email: "accteam@mail.ru",
		amount: "$5454",
	},
	{
		date: "12.05.2023",
		email: "accteam@mail.ru",
		amount: "$5454",
	},
	{
		date: "12.05.2023",
		email: "accteam@mail.ru",
		amount: "$5454",
	},
];

const columnHelper = createColumnHelper();

const columns = [
	columnHelper.accessor("date", {
		header: "Дата",
	}),
	columnHelper.accessor("email", {
		header: "E-mail",
	}),
	columnHelper.accessor("amount", {
		header: "Сумма",
	}),
];

function Table() {
	const [data, setData] = useState(() => [...defaultData]);

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		initialState: {
			pagination: {
				pageSize: 3,
			},
		},
	});

	return (
		<Fragment>
			<SimpleBar autoHide={false}>
				<table className="min-w-full table-fixed overflow-hidden rounded-[7px] bg-dark-gunmetal/75 text-left text-sm">
					<thead>
						{table.getHeaderGroups().map((headerGroup) => (
							<tr key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<th key={header.id} className="bg-yankees-blue px-5 py-3.5 first:rounded-bl-[7px] last:rounded-br-[7px] sm:px-8 sm:py-5">
										{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody className="text-cadet-gray">
						{table.getRowModel().rows.map((row) => (
							<tr key={row.id} className="border-white/5 [&:not(:last-child)]:border-b">
								{row.getVisibleCells().map((cell) => (
									<td key={cell.id} className="px-5 py-3 sm:px-8 sm:py-4">
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</SimpleBar>
			<div className="mt-[7.5px] flex items-center justify-center sm:mr-3 sm:justify-end">
				<div className="mr-3.5 text-sm">
					{table.getState().pagination.pageIndex + 1} из {table.getPageCount()}
				</div>
				<Button variant="transparent" className="group mr-2 h-9 w-9" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
					<ChevronLeftIcon className="h-6 w-5 text-white transition-colors group-disabled:text-cadet-gray" />
				</Button>
				<Button variant="transparent" className="group h-9 w-9" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
					<ChevronRightIcon className="h-6 w-5 text-white transition-colors group-disabled:text-cadet-gray" />
				</Button>
			</div>
		</Fragment>
	);
}

export default Table;
