using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Models
{
	public interface IGridViewColumnModel : IDataBoundControlModel
	{
		string label { get; }
		int width { get; }
		bool isSortable { get; }
	}
}
