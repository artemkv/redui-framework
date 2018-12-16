using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Models
{
	public interface IGridViewModel : IDataBoundControlModel
	{
		string label { get; }
		IGridViewColumnModel[] columns { get; }
		bool canUserAddRows { get; }
		string createNewRowValueFunction { get; }
	}
}
