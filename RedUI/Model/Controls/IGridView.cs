using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Controls
{
	public interface IGridView : IDataBoundControl
	{
		IGridViewColumn[] columns { get; }
		IGridViewRow[] rows { get; }
		IGridViewRow currentRow { get; }
		object createNewRowValue();
		IGridViewSortingInfo sortingInfo { get; }

		void currentRowChanged();
		void sortingChanged();
	}
}
