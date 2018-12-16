using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Models
{
	public interface IGridViewCheckBoxColumnModel : IGridViewColumnModel
	{
		bool isRequired { get; }
		string validationErrorMessage { get; }
	}
}
